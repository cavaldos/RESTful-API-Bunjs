// add router
const router = app.router();

router.get("/test", (req, res) => {
  res.status(200).json({ message: "Router succeed" });
});

router.post("/test", (req, res) => {
  res.status(200).json({ message: "Router succeed" });
});

router.put("/test", (req, res) => {
  res.status(200).json({ message: "Router succeed" });
});

app.use("/your_route_path", router);

export default app;