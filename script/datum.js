
var events = {
    '2024-02-25': ['UFC Fight Night: MORENO VS ROYVAL 2'],
    '2024-02-18': ['UFC 298: VOLKANOVSKI VS TOPURIA'],
    '2024-02-04': ['UFC Fight Night: DOLIDZE VS IMAVOV'],
    '2024-03-10': ['UFC 299: OMALLEY VS VERA 2'],
    '2024-02-24': ['Bellator VS PFL : Champs VS Champs'],
    '2024-02-15': ['ONE Fight Night 19: Haggerty vs. Lobo'],
    '2024-03-01': ['ONE 166: Qatar'],
    
  };
  
  function showSelectedEvents() {
    var dateInput = document.getElementById('dateInput');
    var selectedDate = dateInput.value;
  
    displayEventsForDate(selectedDate);
  }
  
  function displayEventsForDate(date) {
    var eventsList = document.getElementById('eventsList');
    eventsList.innerHTML = '';
  
    if (events[date]) {
      events[date].forEach(function (event) {
        var listItem = document.createElement('li');
        listItem.textContent = event;
        eventsList.appendChild(listItem);
      });
    } else {
      var listItem = document.createElement('li');
      listItem.textContent = 'Nincsenek események erre a dátumra.';
      eventsList.appendChild(listItem);
    }
  }
  