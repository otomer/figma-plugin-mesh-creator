figma.showUI(__html__);
figma.ui.resize(300, 565);

figma.ui.onmessage = async (msg) => {
  if (msg.data && msg.data.length > 0) {
    runner(msg);
  } else {
    alert("Error: no image data");
  }
};

async function runner(msg) {
  await addImageToCanvas(msg);
}

function createImageRect(imageHash, y) {
  const rect = figma.createRectangle();
  rect.fills = [{ type: "IMAGE", scaleMode: "FIT", imageHash }];
  rect.y = y;
  return rect;
}
async function addImageToCanvas(msg) {
  const imageData1 = msg.data[0] as Uint8Array;
  const imageData2 = msg.data[1] as Uint8Array;
  const imageData3 = msg.data[2] as Uint8Array;
  const imageHash = figma.createImage(imageData1).hash;
  const imageHash2 = figma.createImage(imageData2).hash;
  const imageHash3 = figma.createImage(imageData3).hash;

  figma.currentPage.appendChild(createImageRect(imageHash, 0));
  figma.currentPage.appendChild(createImageRect(imageHash2, 60));
  figma.currentPage.appendChild(createImageRect(imageHash3, 160));
  // figma.currentPage.selection = [rect];
  // figma.viewport.scrollAndZoomIntoView([rect]);
  figma.closePlugin(msg.error || "");
}
