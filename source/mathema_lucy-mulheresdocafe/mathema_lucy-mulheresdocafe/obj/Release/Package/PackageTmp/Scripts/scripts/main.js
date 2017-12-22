function verifyTerms(){
	var terms = document.getElementById("checkTerms").checked;

	if (terms == true){
		document.getElementById("regFormSubmit").disabled = false;
		return false;
	} else {
		document.getElementById("regFormSubmit").disabled = true;
		return false;
	}
}

$('div #home-datepicker').datepicker({
    format: "dd/mm/yyyy",
    weekStart: 0,
    maxViewMode: 1,
    todayBtn: "linked",
    language: "pt-BR",
    daysOfWeekHighlighted: "0",
    todayHighlight: true,
		beforeShowDay: function (date){
                  if (date.getMonth() == (new Date()).getMonth())
                    switch (date.getDate()){
                      case 4:
										    return {
										    tooltip: 'Coffee 1: Pago',
										    classes: 'active'
										    };
                      case 8:
                        return false;
                  }
                },
    // beforeShowDay: function (date){
    //               if (date.getMonth() == (new Date()).getMonth())
    //                 switch (date.getDate()){
    //                   case 4:
    //                     return {
    //                       tooltip: 'Coffee 1: Pago',
    //                       classes: 'active'
    //                     };
	  //                     case 12: {
	  //                       return "green";
		// 	                  };
		// 										case 23:
		// 										return {
		// 											tooltip: 'Sem possibilidade de agendamento de Coffee para esse dia',
		// 											false
    //             				};
		// 									},
    toggleActive: true
});
