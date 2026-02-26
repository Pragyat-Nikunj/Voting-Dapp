import { render, screen, fireEvent } from '@testing-library/react';
import { DashboardGrid } from '@/components/DashboardGrid';
import { useMemberVote } from '@/hooks/useMemberVote';
import { vi, describe, it, expect, type Mock } from 'vitest';

const mockedUseMemberVote = useMemberVote as Mock;

vi.mock('@/hooks/useMemberVote', () => ({
  useMemberVote: vi.fn(),
}));

describe('DashboardGrid Interactions', () => {
  it('calls castVote when the Sweet Banana button is clicked', () => {
    const mockCastVote = vi.fn();

    mockedUseMemberVote.mockReturnValue({
      workflowStation: 1, 
      optionAVotes: 0,
      optionBVotes: 0,
      prizePool: '0',
      isOwner: false,
      hasVoted: false,
      castVote: mockCastVote, 
    });

    render(<DashboardGrid />);
    const buttons = screen.getAllByRole('button');
    const bananaButton = buttons[1];
    fireEvent.click(bananaButton);

    expect(mockCastVote).toHaveBeenCalledWith(1);
    expect(mockCastVote).toHaveBeenCalledTimes(1);
  });
});