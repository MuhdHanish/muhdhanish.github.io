$("#Fom-response").submit((e)=>{
  e.preventDefault()
  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbwVeCYn4O5E34bNUQ5m_wEUvmjgFS0cc8cid7e_q6pu8boBYEHHC83in6J5teHejTk/exec",
      data:$("#Fom-response").serialize(),
      method:"post",
      success:function (response){
          alert("Email Responded Successfully")
          // document.getElementById("sent-message").style.display = "block"
          window.location.reload()
          //window.location.href="https://google.com"
      },
      error:function (err){
          alert("Something Error")
      }
  })
})