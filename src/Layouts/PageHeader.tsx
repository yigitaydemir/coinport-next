import logo from "../assets/Logo.png"
import { Menu } from "lucide-react"

const PageHeader = () => {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between">
        <div className="flex gap-4 items-center flex-shrink-0">
            <button>
                <Menu></Menu>
            </button>
            <a href="/">
                <img src={logo} alt="logo" className="h-6"/>
            </a>
        </div>
    </div>
  )
}

export default PageHeader