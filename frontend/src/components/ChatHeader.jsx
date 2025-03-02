import { X } from "lucide-react"
import { useAuthStore } from "../store/useAuthStore"
import { useChatStore } from "../store/useChatStore"

const ChatHeader = () => {
	const { selectedUser, setSelectedUser, isUsersLoading } = useChatStore()
	const { onlineUsers } = useAuthStore()

	return (
		<div className="p-2.5 border-b border-base-300">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-1 md:gap-3">
					{/* Avatar */}
					<div className="avatar">
						<div className="size-10 rounded-full relative">
							{isUsersLoading ? (
								<div className="size-10 rounded-full bg-zinc-500 animate-pulse"></div>
							) : (
								<img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullName} />
							)}
						</div>
					</div>

					{/* User info */}
					<div>
						<h3 className="font-medium text-xs md:text-lg">{selectedUser.fullName}</h3>
						<p className="text-sm text-base-content/70">{onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}</p>
					</div>
				</div>

				{/* Close button */}
				<button onClick={() => setSelectedUser(null)}>
					<X size={15} className="md:size-5" />
				</button>
			</div>
		</div>
	)
}
export default ChatHeader
