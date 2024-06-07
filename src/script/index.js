document.addEventListener("DOMContentLoaded", function () {
  const baseUrl = "http://47.129.7.148:5000";

  const getRefood = () => {
    fetch(`${baseUrl}/refood`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.error) {
          showMessageError(responseJson.message);
        } else {
          // renderRefood(responseJson.data);
          console.log(responseJson.data);
        }
      })
      .catch((error) => {
        showMessageError(error.message);
      });
  };

  getRefood();
});
