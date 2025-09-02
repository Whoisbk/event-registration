import React from 'react'
import RegisterForm from './components/register-form'
import { Metadata } from 'next';
import Logo from "../../../public/images/LogoSVG.svg"

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Verify Me",
        description: "Verify Me - Inspiring Me",
        icons: Logo.src,
        openGraph: {
            title: "Verify Me",
            description: "Verify Me - Inspiring Me",
        },
    };
}
async function RegisterPage() {



    return (
        <RegisterForm />

    )
}

export default RegisterPage