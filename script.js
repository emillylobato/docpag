document.addEventListener('DOMContentLoaded', function() {
  const moreInfoButtons = document.querySelectorAll('.more-info-button');

  moreInfoButtons.forEach(button => {
    button.addEventListener('click', function() {
      const moreInfo = this.nextElementSibling;
      if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
      } else {
        moreInfo.style.display = 'none';
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const homeInfoButtons = document.querySelectorAll('.home-info-button');

  homeInfoButtons.forEach(button => {
    button.addEventListener('click', function() {
      const homeInfo = this.nextElementSibling;
      if (homeInfo.style.display === 'none') {
        homeInfo.style.display = 'block';
      } else {
        homeInfo.style.display = 'none';
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const contactsInfoButtons = document.querySelectorAll('.contacts-info-button');

  contactsInfoButtons.forEach(button => {
    button.addEventListener('click', function() {
      const contactsInfo = this.nextElementSibling;
      if (contactsInfo.style.display === 'none') {
        contactsInfo.style.display = 'block';
      } else {
        contacts.style.display = 'none';
      }
    });
  });
});
