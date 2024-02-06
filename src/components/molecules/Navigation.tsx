import { LinksNavigation } from '../atoms/LinksNavigation'

export const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-3">
        <li>
          <LinksNavigation href="/">Home</LinksNavigation>
        </li>
        <li>
          <LinksNavigation href="/">Workspaces</LinksNavigation>
        </li>
        <li>
          <LinksNavigation href="/">Help</LinksNavigation>
        </li>
        <li>
          <LinksNavigation href="/">Contact</LinksNavigation>
        </li>
      </ul>
    </nav>
  )
}
