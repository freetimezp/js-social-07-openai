import TextToSpeech from "../components/TextToSpeech";
import ChatBotCanvas from "../components/ChatBotCanvas";

export default function Home() {
	return (
		<main className="h-screen">
			{/* chatbot */}
			<ChatBotCanvas />
			{/* text to speech */}
			<TextToSpeech />
		</main>
	);
}
