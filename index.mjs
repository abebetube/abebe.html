import YouTube from "youtube.js";

const youtube = new YouTube();

async function run() {
    const video = await youtube.getVideo("Yk_NjIPaZk4");
    console.log(video);
}

run();
