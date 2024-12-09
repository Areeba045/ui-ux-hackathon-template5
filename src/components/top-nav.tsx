import { Facebook, Instagram, Mail, Phone, Twitter } from 'lucide-react'
import Link from "next/link"

export function TopNav() {
  return (
    <div className="bg-[#23242A] text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>Follow Us and get a chance to win 80% off</span>
          <div className="flex items-center gap-4 ml-4">
            <span>Follow Us :</span>
            <Link href="#" className="hover:text-primary">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link href="#" className="hover:text-primary">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="#" className="hover:text-primary">
              <Twitter className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

