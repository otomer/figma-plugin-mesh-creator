var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__);
figma.ui.resize(300, 550);
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    if (msg.data && msg.data.length > 0) {
        runner(msg);
    }
    else {
        alert("Error: no image data");
    }
});
function runner(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        yield addImageToCanvas(msg);
    });
}
function createImageRect(imageHash, y) {
    const rect = figma.createRectangle();
    rect.fills = [{ type: "IMAGE", scaleMode: "FIT", imageHash }];
    rect.y = y;
    return rect;
}
function addImageToCanvas(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        const imageData1 = msg.data[0];
        const imageData2 = msg.data[1];
        const imageData3 = msg.data[2];
        const imageHash = figma.createImage(imageData1).hash;
        const imageHash2 = figma.createImage(imageData2).hash;
        const imageHash3 = figma.createImage(imageData3).hash;
        figma.currentPage.appendChild(createImageRect(imageHash, 0));
        figma.currentPage.appendChild(createImageRect(imageHash2, 60));
        figma.currentPage.appendChild(createImageRect(imageHash3, 160));
        // figma.currentPage.selection = [rect];
        // figma.viewport.scrollAndZoomIntoView([rect]);
        figma.closePlugin(msg.error || "");
    });
}
