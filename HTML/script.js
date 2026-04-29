document.getElementById('missingChildForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect data
    const formData = {
        name: document.getElementById('childName').value,
        father: document.getElementById('fatherName').value,
        age: document.getElementById('age').value,
        sign: document.getElementById('sign').value,
        address: document.getElementById('address').value,
        mobile: document.getElementById('mobile').value,
        reward: document.getElementById('reward').value || "Not specified"
    };

    // Simple Alert for demonstration
    console.log("Data Submitted:", formData);

    alert(`REPORT SUBMITTED SUCCESSFULLY!\n\nName: ${formData.name}\nWe have alerted the UP Police database. Please keep your phone (${formData.mobile}) reachable.`);

    // Optional: Reset form after submission
    // this.reset();
});