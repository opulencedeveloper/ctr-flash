document.addEventListener("DOMContentLoaded", function () {
  const donut = document.getElementById('donut');
  const segment1 = parseFloat(donut.getAttribute('data-segment1'));
  const segment2 = parseFloat(donut.getAttribute('data-segment2'));

  // Hide label if the segment value is 0
  if (segment1 === 0) {
    document.getElementById('label1').style.display = "none";
  }
  if (segment2 === 0) {
    document.getElementById('label2').style.display = "none";
  }

  const total = segment1 + segment2;
  const segment1Angle = (segment1 / total) * 360;
  const segment2Angle = (segment2 / total) * 360;

  // Update background
  donut.style.background = `conic-gradient(
    #50CD89 0deg ${segment1Angle}deg,
    #3D98FF ${segment1Angle}deg ${segment1Angle + segment2Angle}deg
  )`;

  // Update label text
  document.getElementById('label1').textContent = segment1 + '%';
  document.getElementById('label2').textContent = segment2 + '%';

  // Calculate positions based on middle angles of segments
  const radius = 142.5; // Center radius (half of donut's width/height)
  const labelRadius = 105; // Adjusted radius for label positioning within the segment arc

  const angle1 = (segment1Angle / 2 - 90) * (Math.PI / 180);
  const angle2 = (segment1Angle + segment2Angle / 2 - 90) * (Math.PI / 180);

  const label1 = document.getElementById('label1');
  const label2 = document.getElementById('label2');

  label1.style.top = `${radius + labelRadius * Math.sin(angle1)}px`;
  label1.style.left = `${radius + labelRadius * Math.cos(angle1)}px`;

  label2.style.top = `${radius + labelRadius * Math.sin(angle2)}px`;
  label2.style.left = `${radius + labelRadius * Math.cos(angle2)}px`;

  // Center the labels inside the segments by adjusting their position
  label1.style.transform = 'translate(-50%, -50%)';
  label2.style.transform = 'translate(-50%, -50%)';





//This make sure the select button takes the width of its selected option
  const selectElement = document.querySelector(".custom-select");

  function adjustWidth() {
      // Create a temporary span element to measure the width of the selected option
      const tempSpan = document.createElement('span');
      tempSpan.style.visibility = 'hidden';
      tempSpan.style.position = 'absolute';
      tempSpan.style.whiteSpace = 'nowrap';
      document.body.appendChild(tempSpan);

      // Set the text of the temporary span to the selected option's text
      tempSpan.textContent = selectElement.options[selectElement.selectedIndex].textContent;

      // Adjust the width of the select element based on the span width
      selectElement.style.width = `${tempSpan.offsetWidth + 20}px`;

      // Remove the temporary span from the DOM
      document.body.removeChild(tempSpan);
  }

  if(selectElement) {
    adjustWidth();
    selectElement.addEventListener('change', adjustWidth);
  }

  // Initial adjustment


  // Adjust width on change
 
});






// document.addEventListener("DOMContentLoaded", function () {
//     const donut = document.getElementById('donut');
//     const segment1 = parseFloat(donut.getAttribute('data-segment1'));
//     const segment2 = parseFloat(donut.getAttribute('data-segment2'));

//     if(segment1 === 0) {
//       const myLabel = document.getElementById('label1');
//       myLabel.style.display="none"
//     }

//     if(segment2 === 0) {
//       const myLabel = document.getElementById('label2');
//       myLabel.style.display="none"
//     }

//     const total = segment1 + segment2;
//     const segment1Angle = (segment1 / total) * 360;
//     const segment2Angle = (segment2 / total) * 360;

//     donut.style.background = `conic-gradient(
//       #50CD89 0deg ${segment1Angle}deg,
//       #3D98FF ${segment1Angle}deg ${segment1Angle + segment2Angle}deg
//     )`;

//     document.getElementById('label1').textContent = segment1 + '%';
//     document.getElementById('label2').textContent = segment2 + '%';

//     // Position the labels
//     const label1 = document.getElementById('label1');
//     const label2 = document.getElementById('label2');

//     const radius = 150; // Radius of the outer circle
//     const labelRadius = 120; // Radius for label positioning within the donut

//     // Calculate positions based on middle angles of segments
//     const angle1 = ((segment1Angle / 2) - 90) * (Math.PI / 180); // Middle angle of the first segment
//     const angle2 = ((segment1Angle + segment2Angle / 2) - 90) * (Math.PI / 180); // Middle angle of the second segment

//     label1.style.top = `${130 + labelRadius * Math.sin(angle1)}px`;
//     label1.style.left = `${130 + labelRadius * Math.cos(angle1)}px`;

//     label2.style.top = `${130 + labelRadius * Math.sin(angle2)}px`;
//     label2.style.left = `${130 + labelRadius * Math.cos(angle2)}px`;
  
// });