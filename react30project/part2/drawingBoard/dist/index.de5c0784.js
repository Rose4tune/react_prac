class DrawingBoard {
    MODE = "NONE";
    IsMouseDown = false;
    constructor(){
        this.assingElement();
        this.initContext();
        this.addEvent();
    }
    assingElement() {
        this.containerEl = document.getElementById("container");
        this.canvasEl = this.containerEl.querySelector("#canvas");
        this.toolbarEl = this.containerEl.querySelector("#toolbar");
        this.brushEl = this.toolbarEl.querySelector("#brush");
    }
    initContext() {
        this.context = this.canvasEl.getContext("2d");
    }
    addEvent() {
        this.brushEl.addEventListener("click", this.onClickBrush.bind(this));
        this.canvasEl.addEventListener("mousedown", this.onMouseDown.bind(this));
        this.canvasEl.addEventListener("mousemove", this.onMouseMove.bind(this));
        this.canvasEl.addEventListener("mouseup", this.onMouseUp.bind(this));
    }
    onMouseDown(event1) {
        if (this.MODE === "NONE") return;
        this.IsMouseDown = true;
        const currentPosition = this.getMousePosition(event1);
        this.context.beginPath();
        this.context.moveTo(currentPosition.x, currentPosition.y);
        this.context.lineCap = "round";
        this.context.strokeStyle = "#000000";
        this.context.lineWidth = 10;
    }
    onMouseMove(event1) {
        if (!this.IsMouseDown) return;
        const currentPosition = this.getMousePosition(event1);
        this.context.lineTo(currentPosition.x, currentPosition.y);
        this.context.stroke();
    }
    onMouseUp() {
        if (this.MODE === "NONE") return;
        this.IsMouseDown = false;
    }
    getMousePosition() {
        const boundaries = this.canvasEl.getBoundingClientRect();
        return {
            x: event.clientX - boundaries.left,
            y: event.clientY - boundaries.top
        };
    }
    onClickBrush(event1) {
        const IsActive = event1.currentTarget.classList.contains("active");
        this.MODE = IsActive ? "NONE" : "BRUSH";
        this.canvasEl.style.cursor = IsActive ? "default" : "crosshair";
        this.brushEl.classList.toggle("active");
    }
}
new DrawingBoard();

//# sourceMappingURL=index.de5c0784.js.map
