window.addEventListener("load", () => {
    const searchParams = new URLSearchParams(document.location.search);

    let joins = [];
    for (const [key, value] of searchParams.entries()) {
        joins.push(`${key}: ${value}`);
    }

    document.getElementById('form-values').textContent = joins.join("\n");
});