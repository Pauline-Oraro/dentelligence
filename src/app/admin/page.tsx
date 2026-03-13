import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";
import AdminDashboardClient from "./AdminDashboardClient";


async function AdminPage() {
    const user = await currentUser();

    //if user is not logged in redirect to home page
    if(!user) redirect("/")

        //admin email from env variable
    const adminEmail = process.env.ADMIN_EMAIL;

    //check if user is admin
    const userEmail = user.emailAddresses[0]?.emailAddress;

    //if user is not admin redirect to dashboard
     if (!adminEmail || userEmail !== adminEmail) redirect("/dashboard");
  return (
    <div><AdminDashboardClient /></div>
  )
}

export default AdminPage