// Tab switching
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((tab) => tab.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// Chart.js fake data
const randomData = () =>
  Array.from({ length: 14 }, () => Math.floor(Math.random() * 1000 + 500));
const labels = Array.from({ length: 14 }, (_, i) => `Day ${i + 1}`);

new Chart(document.getElementById("reachChart"), {
  type: "line",
  data: {
    labels,
    datasets: [
      {
        label: "Impressions",
        data: randomData(),
        borderColor: "#3b82f6",
        fill: false,
      },
    ],
  },
  options: { responsive: true, plugins: { legend: { display: false } } },
});

new Chart(document.getElementById("engagementChart"), {
  type: "bar",
  data: {
    labels,
    datasets: [
      { label: "Retention", data: randomData(), backgroundColor: "#10b981" },
    ],
  },
  options: { responsive: true, plugins: { legend: { display: false } } },
});

new Chart(document.getElementById("revenueChart"), {
  type: "line",
  data: {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: randomData(),
        borderColor: "#f59e0b",
        fill: false,
      },
    ],
  },
  options: { responsive: true, plugins: { legend: { display: false } } },
});
