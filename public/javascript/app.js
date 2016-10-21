var bears, chairs;

bears = 'bears';

chairs = 'chairs';

$(function() {
  return $('.chairs').click(function() {
    if (bears) {
      return chairs;
    } else if (hairs) {
      return bears;
    }
  });
});
