import { FC, ReactNode } from "react"
import Sidebar from "./Sidebar"

interface ILayout {
  children: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className="flex gap-10">
      <Sidebar />
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout