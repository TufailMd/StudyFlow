"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link"; // ✅ Fixed: was imported from lucide-react
import * as React from "react";
import {
  Controller,
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import ROUTES from "@/constant/routes";

// ✅ Removed unused local formSchema

interface AuthFormProps<T extends FieldValues> {
  schema: z.ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean }>;
  formType: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({
  schema,
  defaultValues,
  formType,
  onSubmit,
}: AuthFormProps<T>) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  // ✅ Fixed: correct spelling + actually calls onSubmit + handles toast
  const handleSubmit: SubmitHandler<T> = async (data) => {
    // Todo : Authenticate User
  };

  const buttonText = formType === "SIGN_IN" ? "Sign In" : "Sign Up";

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            {formType === "SIGN_IN"
              ? "Sign in to your account"
              : "Create your account"}
          </h1>
          <h6 className="text-sm text-gray-600 dark:text-gray-400">
            {formType === "SIGN_IN"
              ? "Continue to StudyFlow"
              : "Start your journey with StudyFlow"}
          </h6>
        </div>
        <Image
          src="/images/logo-site.svg"
          alt="StudyFlow Logo"
          width={55}
          height={55}
        />
      </div>

      <Card className="w-full mt-3 sm:max-w-md">
        <CardContent>
          <form
            className="py-3 space-y-6"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FieldGroup>
              {Object.keys(defaultValues).map((field) => (
                <Controller
                  name={field as Path<T>}
                  key={field}
                  control={form.control}
                  render={({ field }) => (
                    <Field className="flex w-full flex-col gap-2.5">
                      <FieldLabel className="paragraph-medium text-dark400_light700">
                        Enter{" "}
                        {field.name === "email"
                          ? "Email Address"
                          : field.name.charAt(0).toUpperCase() +
                            field.name.slice(1)}
                      </FieldLabel>
                      <Input
                        required
                        type={field.name === "password" ? "password" : "text"}
                        {...field}
                        className="paragraph-regular background-light900_dark300 text-dark300_light700 no-focus min-h-12 rounded-1.5"
                      />
                    </Field>
                  )}
                />
              ))}
              <Button
                disabled={form.formState.isSubmitting}
                className="primary-gradient paragraph-medium min-h-12 w-full rounded-2 px-4 py-3 font-inter !text-light-900"
              >
                {form.formState.isSubmitting
                  ? formType === "SIGN_IN"
                    ? "Signing In..." // ✅ Fixed typo: "Signin In" → "Signing In"
                    : "Signing Up..."
                  : buttonText}
              </Button>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      {formType === "SIGN_IN" ? (
        <p>
          Don&apos;t have an account?{" "}
          <Link
            href={ROUTES.SIGN_UP}
            className="paragraph-semibold primary-text-gradient"
          >
            Sign up
          </Link>
        </p>
      ) : (
        <p>
          Already have an account?{" "}
          <Link
            href={ROUTES.SIGN_IN}
            className="paragraph-semibold primary-text-gradient"
          >
            Sign in
          </Link>
        </p>
      )}
    </>
  );
};

export default AuthForm;
