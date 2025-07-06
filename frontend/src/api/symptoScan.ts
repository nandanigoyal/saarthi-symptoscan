export const getDiagnosis = async (symptoms: string[]) => {
  const response = await fetch("http://127.0.0.1:8000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ symptoms }),
  });

  if (!response.ok) throw new Error("API call failed");
  return response.json();
};

export const getTips = async () => {
  const res = await fetch("http://127.0.0.1:8000/get-tips");
  if (!res.ok) throw new Error("Failed to fetch tips");
  return await res.json();
};

