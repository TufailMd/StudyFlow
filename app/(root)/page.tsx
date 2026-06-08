import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constant/routes";

async function page() {
  const session = await auth();
  console.log(session);

  return (
    <>
      <h1 className="h1-bold">Welcome to studyflow</h1>
      <form
        action={async () => {
          "use server";

          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">logout</Button>
      </form>
    </>
  );
}

export default page;
