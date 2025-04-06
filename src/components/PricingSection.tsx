export const handleGetStarted = (plan: string) => {
  window.location.href = `/signup?plan=${plan}`;
}; 