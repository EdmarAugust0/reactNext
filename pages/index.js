import NextLink from "../src/components/Link"

export default function HomePage() {
    return (
        <div>
            <h1>Alura Cases - Home</h1>
            <NextLink href="/faq">
                Ir para o FAQ
            </NextLink>
        </div>
    )
}