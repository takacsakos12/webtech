function submitForm() {
  var textInput = document.getElementById('textInput');
  var textareaInput = document.getElementById('textareaInput');
  var checkboxInput = document.getElementById('checkboxInput');
  var radioInputs = document.getElementsByName('radioGroup');
  var colorInput = document.getElementById('colorInput');

  // Visszaállítjuk az eredeti stílust
  textInput.style.border = '1px solid #ddd';
  textareaInput.style.border = '1px solid #ddd';
  colorInput.style.border = '1px solid #ddd';
  for (var i = 0; i < radioInputs.length; i++) {
    radioInputs[i].style.outline = 'none';
}

  // Ellenőrzések
  var textInputValue = textInput.value.trim();
  var textareaInputValue = textareaInput.value.trim();
  var checkboxInputChecked = checkboxInput.checked;
  var radioInputValue = document.querySelector('input[name="radioGroup"]:checked');
  var colorInputValue = colorInput.value;

  if (textInputValue === '') {
      alert('Hibás rendelés: A név nem lehet üres.');
      textInput.style.border = '2px solid red'; // Módosítjuk a keretet vörösre
      return;
  }

  if (textareaInputValue === '') {
      alert('Hibás rendelés: A cím nem lehet üres.');
      textareaInput.style.border = '2px solid red'; // Módosítjuk a keretet vörösre
      return;
  }

  if (!radioInputValue) {
    alert('Hiba: Válassz egy opciót a méretből.');
    for (var i = 0; i < radioInputs.length; i++) {
        radioInputs[i].style.outline = '2px solid red'; // Módosítjuk az opciók körvonalát vörösre
    }
    return;
}

  console.log('Szöveges beviteli mező (egy sor):', textInputValue);
  console.log('Szöveges beviteli mező (több sor):', textareaInputValue);
  console.log('Checkbox:', checkboxInputChecked);
  console.log('Radio button:', radioInputValue.value);
  console.log('Színválasztó:', colorInputValue);
}
