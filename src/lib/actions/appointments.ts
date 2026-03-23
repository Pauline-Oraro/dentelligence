"use server"

import { prisma } from "../prisma";

//fetching appointments from the database
export async function getAppointments(){
    try {
        //get appointments from the database and include the user first and last name and the email. Also include the doctor name and imageurl. Order the appointments by createdAt in descending order
        const appointments = await prisma.appointment.findMany({
            include: {
                user: {
                    select: {firstName: true,
                            lastName: true,
                            email: true,}
                },
                doctor: {
                    select:{
                        name: true,
                        imageUrl: true
                    },
                },
                
            },
            orderBy: {createdAt: "desc"}
        })
        return appointments;
    }
    catch (error){
        console.log("Error fetching appointments:", error);
    throw new Error("Failed to fetch appointments");
    }
}