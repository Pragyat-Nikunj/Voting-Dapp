import { render, screen } from '@testing-library/react';
import { AdminPanel } from '@/components/AdminPanel';
import { useMemberVote } from '@/hooks/useMemberVote';
import { vi, describe, it, expect } from 'vitest';

vi.mock('@/hooks/useMemberVote', () => ({
  useMemberVote: vi.fn(),
}));

describe('AdminPanel Visibility', () => {
  it('should return null if the user is NOT the owner', () => {
    (useMemberVote as any).mockReturnValue({
      isOwner: false,
      workflowStation: 1,
    });

    const { container } = render(<AdminPanel />);
    expect(container.firstChild).toBeNull();
  });

  it('should show Admin Console if the user IS the owner', () => {
    (useMemberVote as any).mockReturnValue({
      isOwner: true,
      workflowStation: 1,
      prizePool: '0',
    });

    render(<AdminPanel />);
    
    expect(screen.getByText(/Admin Console/i)).toBeInTheDocument();
  });
});