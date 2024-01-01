let userPlayed = false;
const video = document.querySelector("video");

// Set flag on manual play
video.addEventListener(
  "play",
  () => (userPlayed = true)
);

window.addEventListener("scroll", () => {
  if (userPlayed) {
    const rect = video.getBoundingClientRect();

    const halfwayVisibleTop =
      window.innerHeight - video.clientHeight / 2;

    const isAboveBottom =
      rect.top <= halfwayVisibleTop;

    const isBelowTop =
      rect.top >= -video.clientHeight / 2;

    // Check if video is in viewport
    const inView = isAboveBottom && isBelowTop;

    // Play/pause based on visibility
    inView ? video.play() : video.pause();
  }
});
