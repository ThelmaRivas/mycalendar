const currentDay = dayjs().format('dddd, MMMM D, YYYY');

$('#currentDay').text(currentDay);

const currentHour = dayjs().hour();
console.log('currentHour', currentHour)

$('.saveBtn').on('click', function (event) {
  const todo = $(this).siblings('.description').val();
  console.log("todo", todo);
  const hour = $(this).parent().attr('id');
  console.log("hour", hour);
  localStorage.setItem(hour, todo)
})

for (let i = 9; i < 18; i++) {
  const hour = 'hour-' + i;
  const todo = localStorage.getItem(hour);
  $('#' + hour).children('.description').val(todo);
  if (i < currentHour) {
    $('#' + hour).addClass('past');
  } else if (i == currentHour) {
    $('#' + hour).addClass('present')
  } else {
    $('#' + hour).addClass('future');
  }
}
