
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="text-center">
            <h2 className="text-3x1">Please login to Vote!!</h2>
            <button className="border:solid"><Link href='/'>Dashboard</Link></button>
        </main>
    )
}