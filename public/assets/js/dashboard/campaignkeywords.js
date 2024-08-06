document.addEventListener("DOMContentLoaded", function () {
    const donut = document.getElementById('donut');
    const segment1 = parseFloat(donut.getAttribute('data-segment1'));
    const segment2 = parseFloat(donut.getAttribute('data-segment2'));

    const total = segment1 + segment2;
    const segment1Angle = (segment1 / total) * 360;
    const segment2Angle = (segment2 / total) * 360;

    donut.style.background = `conic-gradient(
      #50CD89 0deg ${segment1Angle}deg,
      #3D98FF ${segment1Angle}deg ${segment1Angle + segment2Angle}deg
    )`;

    document.getElementById('label1').textContent = segment1 + '%';
    document.getElementById('label2').textContent = segment2 + '%';

    // Position the labels
    const label1 = document.getElementById('label1');
    const label2 = document.getElementById('label2');

    const radius = 150; // Radius of the outer circle
    const labelRadius = 100; // Radius for label positioning within the donut

    // Calculate positions based on middle angles of segments
    const angle1 = ((segment1Angle / 2) - 90) * (Math.PI / 180); // Middle angle of the first segment
    const angle2 = ((segment1Angle + segment2Angle / 2) - 90) * (Math.PI / 180); // Middle angle of the second segment

    label1.style.top = `${150 + labelRadius * Math.sin(angle1)}px`;
    label1.style.left = `${150 + labelRadius * Math.cos(angle1)}px`;

    label2.style.top = `${150 + labelRadius * Math.sin(angle2)}px`;
    label2.style.left = `${150 + labelRadius * Math.cos(angle2)}px`;
  
});