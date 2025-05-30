function increaseValue() {
    const input = document.getElementById('quantityInput');
    input.value = parseInt(input.value) + 1;
  }

  function decreaseValue() {
    const input = document.getElementById('quantityInput');
    if (parseInt(input.value) > parseInt(input.min)) {
      input.value = parseInt(input.value) - 1;
    }
  }




$(document).ready(function () {
    let currentStep = 0;
    const steps = $(".form-step");

    function showStep(index) {
      steps.removeClass("active d-none").addClass("d-none");
      $(steps[index]).removeClass("d-none").addClass("active");
    }

    $(".next-step").on("click", function () {
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
      }
    });

    $(".prev-step").on("click", function () {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
      }
    });

    $("#stepForm").on("submit", function (e) {
      e.preventDefault();
      alert("Form submitted!");
      $("#multiStepModal").modal('hide');
    });





    //Check All 

    $('#checkAll').change(function () {
      $('.sub-check').prop('checked', $(this).prop('checked'));
    });

    $('.sub-check').change(function () {
      // If all sub-checks are checked, check the master checkbox
      const allChecked = $('.sub-check').length === $('.sub-check:checked').length;
      $('#checkAll').prop('checked', allChecked);
    });
});