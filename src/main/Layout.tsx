import { FC, ReactNode } from "react"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"

interface ILayout {
  children: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className="flex gap-10">
      <Sidebar />
      <main>
        {children}
        <Outlet />
      </main>
    </div>
  )
}

export default Layout