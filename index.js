function goToJoinPage() {
  window.location.href = 'signup.html';
}

(() => {
  window.addEventListener(
    "DOMContentLoaded",
    async () => {
      const response = await fetch(
        "http://localhost:8080/members"
      );
    }
  );
})();