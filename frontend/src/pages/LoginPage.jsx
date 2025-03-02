import { useState } from "react"
import { useAuthStore } from "../store/useAuthStore"
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react"
import { Link } from "react-router-dom"
import AuthImagePattern from "../components/AuthImagePattern"

const LoginPage = () => {
	const [showPassword, setShowPassword] = useState(false)
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	})
	const { login, isLoggingIn } = useAuthStore()

	const handleSubmit = async (e) => {
		e.preventDefault()
		login(formData)
	}
	return (
		<div className="min-h-dvh grid lg:grid-cols-2">
			{/*left side */}
			<div className="flex flex-col justify-center items-center p-6 sm:p-12">
				<div className="w-full max-w-md space-y-8">
					{/* logo */}
					<div className="text-center mb-8 ">
						<div className="flex flex-col items-center gap-2 group ">
							<div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
								<MessageSquare className="size-6 text-primary" />
							</div>
							<h1 className="text-2xl font-bold mt-2">Добро пожаловать</h1>
							<p className="text-base-content/60">Войдите в свой аккаунт</p>
						</div>
					</div>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="form-control">
							<label className="label">
								<span className="label-text font-medium">Email</span>
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<Mail className="size-5 text-base-content/40" />
								</div>
								<input
									type="email"
									className={`input input-bordered w-full pl-10`}
									placeholder="Введите свою почту"
									value={formData.email}
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								/>
							</div>
						</div>

						<div className="form-control ">
							<label className="label">
								<span className="label-text font-medium">Пароль</span>
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<Lock className="size-5 text-base-content/40" />
								</div>
								<input
									type={`${showPassword ? "text" : "password"}`}
									className={`input input-bordered w-full pl-10`}
									placeholder="*******"
									value={formData.password}
									onChange={(e) => setFormData({ ...formData, password: e.target.value })}
								/>
								<button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center">
									{showPassword ? <EyeOff className="size-5 text-base-content/40" /> : <Eye className="size-5 text-base-content/40" />}
								</button>
							</div>
						</div>
						<button type="submit" className="btn btn-primary w-full" disabled={isLoggingIn}>
							{isLoggingIn ? (
								<>
									<Loader2 className="size-5 animate-spin" />
									Loading...
								</>
							) : (
								"Войти"
							)}
						</button>
					</form>
					<div className="text-center">
						<p className="text-base-content/60">
							Еще нет аккаунта?{" "}
							<Link to="/signup" className="link link-primary">
								Зарегистрируйтесь
							</Link>
						</p>
					</div>
				</div>
			</div>

			{/* right side */}
			<AuthImagePattern title="Добро пожаловать!" subtitle="Войдите чтобы продолжить ваши чаты и общаться." />
		</div>
	)
}
export default LoginPage
