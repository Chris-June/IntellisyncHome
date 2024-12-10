export interface WaitlistData {
  name: string;
  email: string;
  company?: string;
  interests: string[];
  source: 'waitlist' | 'offer';
  specificOffer?: string;
}

export async function submitWaitlistEntry(data: WaitlistData) {
  try {
    const response = await fetch('http://localhost:3001/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.error || 'Failed to submit waitlist entry');
    }

    return true;
  } catch (error) {
    console.error('Error submitting waitlist entry:', error);
    throw error;
  }
}