import { Link } from "react-router-dom"
import { useAuthStore } from "../store/useAuthStore"
import { LogOut, MessageSquare, Settings, User } from "lucide-react"

const NavBar = () => {
	const { logout, authUser } = useAuthStore()
	return (
		<header className="bg-base-100 border-b border-base-300 fixed w-full px-4 md:px-12 top-0 z-40 backdrop-blur-lg bg-base-100/80">
			<div className="container mx-auto  h-16">
				<div className="flex justify-between items-center h-full">
					<div className="flex items-center gap-8">
						<Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
							<div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
								<MessageSquare className="size-5 text-primary" />
							</div>
							<h1 className="text-lg from-bold">
								m1ra.<span className="text-primary">chatty</span>
							</h1>
						</Link>
					</div>
					<div className="flex items-center gap-2">
						<Link to="/settings" className="btn btn-sm gap-2 transition-colors">
							<Settings className="size-4" />
							<span className="hidden sm:inline">Настройки</span>
						</Link>

						{authUser && (
							<>
								<Link to="/profile" className="btn btn-sm gap-2 ">
									<User className="size-5" />
									<span className="hidden sm:inline">Профиль</span>
								</Link>

								<button onClick={logout} className="flex gap-2 items-center">
									<LogOut className="size-5" />
									<span className="hidden sm:inline">Выйти</span>
								</button>
							</>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}
export default NavBar
