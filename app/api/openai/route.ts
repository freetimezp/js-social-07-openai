import { NextResponse } from "next/server";

export async function GET(request: Request) {
    return new Response("Hello, Form OpenAI");
}

export async function POST(request: Request) {
    const { userText } = await request.json();

    //console.log(userText);

    return NextResponse.json({ message: userText }, { status: 200 });
}