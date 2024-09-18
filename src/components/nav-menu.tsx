import Account from "./account"
import { Icons } from "./icons"

export default function NavMenu() {
  return (
    <div className="flex h-[5rem] items-center justify-between gap-4 bg-black px-10 py-4">
      <Icons.turnkey className="h-7 w-auto  fill-white stroke-none" />
      <div className="flex items-center justify-center gap-4">
        <Account />
      </div>
    </div>
  )
}
