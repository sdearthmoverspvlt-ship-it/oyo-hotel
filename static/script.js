// Global variables using var
var currentGuestName = "";
var currentGuestEmail = "";

// Function to switch between Page 1, Page 2, and Page 3
function showPage(pageNumber) {
    // Hide all pages first
    var pages = document.getElementsByClassName("page-section");
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove("active-page");
    }

    // Show the selected page
    var targetPage = document.getElementById("page" + pageNumber);
    if (targetPage) {
        targetPage.classList.add("active-page");
        window.scrollTo(0, 0);
    }
}

// Form Validation Function (Checks Gmail & Phone)
function validateAndProceed(event) {
    event.preventDefault(); // Prevent page refresh

    var nameInput = document.getElementById("guestName").value.trim();
    var emailInput = document.getElementById("guestEmail").value.trim();
    var phoneInput = document.getElementById("guestPhone").value.trim();
    var dateInput = document.getElementById("checkInDate").value;

    // 1. Validate Name
    if (nameInput.length < 3) {
        alert("⚠️ Alert: Please enter a valid full name (at least 3 characters).");
        return false;
    }

    // 2. Validate Gmail address specifically
    var gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailPattern.test(emailInput)) {
        alert("❌ Invalid Email! Please enter a valid '@gmail.com' address (e.g., rahul@gmail.com).");
        return false;
    }

    // 3. Validate 10-digit Phone Number
    if (phoneInput.length !== 10 || isNaN(phoneInput)) {
        alert("⚠️ Alert: Please enter a valid 10-digit mobile number.");
        return false;
    }

    // Store guest details
    currentGuestName = nameInput;
    currentGuestEmail = emailInput;

    // Success Alert Box
    alert("✅ Sign-Up Successful!\nWelcome " + currentGuestName + " (" + currentGuestEmail + ").\nClick OK to view our Deluxe, Suite, AC & Non-AC Rooms.");

    // Personalize Page 3 greeting
    document.getElementById("welcomeGuestText").innerHTML = 
        "Welcome <b>" + currentGuestName + "</b>! Check-in Date: <b>" + dateInput + "</b>. Choose your room below:";

    // Move to Page 3 (Rooms & Menu)
    showPage(3);
    return true;
}

// Final Room Booking Confirmation Alert
function confirmBooking(roomType, price) {
    var guest = currentGuestName !== "" ? currentGuestName : "Valued Guest";
    
    alert(
        "🎉 BOOKING CONFIRMED! 🎉\n\n" +
        "Guest Name: " + guest + "\n" +
        "Room Selected: " + roomType + "\n" +
        "Tariff: ₹" + price + " / night\n\n" +
        "Confirmation details have been sent to your Gmail!"
    );
}
