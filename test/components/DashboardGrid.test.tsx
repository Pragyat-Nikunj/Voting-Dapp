import { render, screen } from '@testing-library/react';
import { DashboardGrid } from '@/components/DashboardGrid';
import { useMemberVote } from '@/hooks/useMemberVote';
import { vi, describe, it, expect, type Mock } from 'vitest';

const mockedUseMemberVote = useMemberVote as Mock;

vi.mock('@/hooks/useMemberVote', () => ({
  useMemberVote: vi.fn(),
}));

describe('DashboardGrid Workflow', () => {
  it('renders the Winner Screen when in the RESETTING phase', () => {
    mockedUseMemberVote.mockReturnValue({
      workflowStation: 2, 
      optionAVotes: 10,
      optionBVotes: 5,
      prizePool: '0.15',
      isOwner: false,
      hasVoted: true,
    });

    render(<DashboardGrid />);

    expect(screen.getByText(/Session 2 Finalized/i)).toBeInTheDocument();
    expect(screen.getByText(/Crispy Apple/i)).toBeInTheDocument();
    expect(screen.getByText(/0.15 ETH/i)).toBeInTheDocument();
  });

  it('renders the Voting Cards when in the VOTING phase', () => {
    mockedUseMemberVote.mockReturnValue({
      workflowStation: 1, 
      optionAVotes: 0,
      optionBVotes: 0,
      prizePool: '0',
      isOwner: false,
      hasVoted: false,
    });

    render(<DashboardGrid />);

    expect(screen.getByText(/Which fruit provides the best energy/i)).toBeInTheDocument();
    expect(screen.getByText(/Crispy Apple/i)).toBeInTheDocument();
    expect(screen.getByText(/Sweet Banana/i)).toBeInTheDocument();
  });
});