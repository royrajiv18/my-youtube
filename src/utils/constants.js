const GOOGLE_API_KEY = "AIzaSyBBzgsEg7vK7VT3mROvqbk0C5bVGy63K5U";
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=10&key=${GOOGLE_API_KEY}`;
export const YOUTUBE_SEARCH_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&key=${GOOGLE_API_KEY}&q=`;
export const LIVE_CHAT_COUNT = 10;
