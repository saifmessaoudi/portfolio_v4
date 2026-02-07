import React from 'react';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { socialMedia } from '@config';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 20px 15px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px 15px 20px calc(15px + var(--sidebar-width-mobile));
  }
`;

const StyledSocialLinks = styled.div`
  display: none;

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      transition: var(--transition);

      &:hover {
        color: var(--accent);
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;
  letter-spacing: 0.03em;

  a {
    padding: 10px;
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledSocialLinks>
      <ul>
        {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
      </ul>
    </StyledSocialLinks>

    <StyledCredit tabIndex="-1">
      <div>Designed &amp; Built by Saif Messaoudi &copy; {new Date().getFullYear()}</div>
    </StyledCredit>
  </StyledFooter>
);

export default Footer;
