import TextToSpeech from "../components/TextToSpeech";
import ChatBotCanvas from "../components/ChatBotCanvas";
import { IsPlayingProvider } from "./context/IsPlayingContext";

export default function Home() {
	return (
		<main className="h-screen max-h-[100vh]">
			<IsPlayingProvider>
				{/* chatbot */}
				<ChatBotCanvas />
				{/* text to speech */}
				<TextToSpeech />
			</IsPlayingProvider>
		</main>
	);
}
