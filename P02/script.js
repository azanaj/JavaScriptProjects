// Grab elements
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.querySelector('.total');
const movieSelect = document.getElementById('movie');

// Booking button
const confirmBtn = document.createElement('button');
confirmBtn.innerText = "Confirm Booking";
confirmBtn.style.marginTop = "15px";
confirmBtn.style.padding = "10px 20px";
confirmBtn.style.fontSize = "16px";
confirmBtn.style.cursor = "pointer";
document.body.appendChild(confirmBtn);

let ticketPrice = +movieSelect.value;

// 🟢 Reset everything on refresh
localStorage.clear();

// Save selected movie index & price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Clear all selected/occupied seats
function resetSeats() {
    seats.forEach(seat => {
        seat.classList.remove('selected');
        seat.classList.remove('occupied');
    });
    updateSelectedCount();
}

// Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);

    // 🟢 Reset seats when changing movie
    resetSeats();
});

// Seat click event
container.addEventListener('click', e => {
    if (
        e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

// Confirm booking event
confirmBtn.addEventListener('click', () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    if (selectedSeats.length === 0) {
        alert("Please select at least one seat before booking!");
        return;
    }

    selectedSeats.forEach(seat => {
        seat.classList.remove('selected');
        seat.classList.add('occupied');
    });

    updateSelectedCount();
    alert("Booking confirmed! ✅");
});

// Initial setup
updateSelectedCount();
