// app/contact/page.tsx

import { HStack, VStack} from "@/components/stack-layout";

const title = "Contact | Lytude"
const description = `Contact Lytude. email: lytude@gmail.com; Instagram: @lytudellc, https://www.instagram.com/lytudellc;
                    LinkedIn: Nzubechukwu Okey-iwobi, https://www.linkedin.com/in/nzubechukwu-okey-iwobi-ba6486217;`
const logo = "/assets/images/logos/(fade) Favicon.png"

export const metadata = {
    title: title,
    description: description,
    keywords: ["contact, @lytudellc, Nzubechukwu, Okey-iwobi, entertainment, lytude@gmail.com"],
    openGraph: {
        title: title,
        description: description,
        url: "https://lytude.com/about",
        images: [logo],
    },
    twitter: {
        card: "summary_large_image",
        title: title,
        description: description,
        images: [logo],
    },
    authors: [{ name: "N. Brendan Okey-Iwobi" }]
};

function ContactPage() {

    // const structuredData = {
    //     "@context": "https://schema.org",
    //     "@type": "ContactPage",
    //     name: "Lytude",
    //     url: "https://lytude.com",
    //   };

    const contacts = [
        {
            label: "Email",
            value: "lytude@gmail.com",
            link: "mailto:lytude@gmail.com",
        },
        {
            label: "Instagram",
            value: "@lytudellc",
            link: "https://www.instagram.com/lytudellc",
        },
        {
            label: "LinkedIn",
            value: "Nzubechukwu Okey-iwobi",
            link: "https://www.linkedin.com/in/nzubechukwu-okey-iwobi-ba6486217",
        },
    ];

    return (
        <>
        <div className="inner-content">

            <VStack
                gap="10px"
                align="flex-start"
                justify="flex-start"
                style={{
                    width: "100%",
                    padding: "0px 20px",
                    minHeight: "100vh"
                }}
            >
                <div style={{ height: "100px" }} />
                <h1>Get in Touch</h1>
                <p style={{ fontSize: "1.1rem", color: "#666" }}>
                    I&apos;d love to hear from you! Reach out via any of the contact methods below.
                </p>

                <VStack gap="1rem" align="flex-start">
                    {contacts.map((contact, index) => (
                        <HStack key={index} justify="center" gap="1rem">
                            <p style={{ fontSize: "1.2rem" }}>
                                <b>{contact.label}:</b>
                            </p>
                            <p><a
                                href={contact.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    fontSize: "1.2rem",
                                    textDecoration: "none",
                                }}
                            >
                                {contact.value}
                            </a></p>
                        </HStack>
                    ))}
                </VStack>
            </VStack>
        </div>
        </>
    );
}

export default ContactPage