import VideoFeed from "./VideoFeed";

function App() {
  return (
    <div className="app">
      Hello World!
      <VideoFeed src="http://localhost:8083/stream/pattern/channel/0/hls/live/index.m3u8" />
    </div>
  );
}

export default App;
