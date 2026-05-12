import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Classes from './Faq.module.css'

const AccordionContainer = styled('div')({
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
});

const StyledAccordion = styled(Accordion)({
    background: '#0e142f6b',
    border: '1px solid #282d4575',
    backdropFilter: 'blur(7px)',
    color: 'white',
    marginBottom: '10px !important',
    borderRadius: '10px !important',
    padding: '5px 15px !important',
    '&:before': {
        display: 'none',
    },
});

const StyledAccordionSummary = styled(AccordionSummary)({
    minHeight: '32px !important',
    margin: '0 !important',
    padding: '0px 10px !important',
    '&.Mui-expanded': {
        margin: '0 !important',
        minHeight: '32px !important',
        padding: '0px 10px !important',
    },
    '.MuiAccordionSummary-content': {
        margin: '10px 0 !important',
    },
});

const StyledAccordionDetails = styled(AccordionDetails)({
    padding: '0 16px 16px 10px !important',
    textAlign: 'left',
});

const AccordionHeader = styled('h5')({
    fontWeight: 'bold',
    fontSize: '1rem',
});

const AccordionText = styled('h5')({
    fontSize: '15px',
    color: 'white',
    fontWeight: '200',
});

const SectionE = () => {
    const [expanded, setExpanded] = useState('panel1');
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const faqs = [
        {
            question: "What services does Virtuososys offer?",
            answer: "Virtuososys is a 360° IT solutions company. We offer web development, mobile app development, software testing (QA), UI/UX design, AI development, SaaS, e-commerce solutions, and technical training — all at world-class standards and highly competitive rates."
        },
        {
            question: "Why should I choose Virtuososys over other agencies?",
            answer: "We operate from India which allows us to offer highly competitive pricing without sacrificing quality. Our team uses premium code standards, works across multiple domains (healthcare, e-commerce, logistics, real estate, etc.), and customizes every project based on your specific requirements and market conditions."
        },
        {
            question: "What technologies does your team use?",
            answer: "Our team is proficient in ReactJS, Node.js, Next.js, Flutter, Java, SQL, Microsoft Azure, PgAdmin4, SOAP, and many other modern technologies, databases and web services.",
        },
        {
            question: "Do you offer software testing and QA services?",
            answer: "Absolutely! Our dedicated QA teams perform quality verification of software products for different market segments including e-commerce, healthcare, media and entertainment, travel and accommodation, and business solutions. We conduct a wide range of testing to ensure your product is flawless."
        },
        {
            question: "Do you provide technical training?",
            answer: "Yes! We offer technical training programs including software QA testing. QA testing is easy to learn and not very code-intensive, typically taking six to ten weeks. Web development training typically takes 12-26 weeks. Our training is hands-on and practical."
        },
        {
            question: "How can I get started with my project?",
            answer: (
                <>
                    Visit our website at{" "}
                    <a
                        href="https://virtuososys.co/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: '#a365ff' }}
                    >
                        virtuososys.co
                    </a>{" "}
                    or reach out to us directly to discuss your requirements. We will customize a
                    solution specifically designed to boost your business and customer reach.
                </>
            ),
        }
    ];

    return (
        <AccordionContainer>
            {faqs.map((faq, index) => (
                <StyledAccordion
                    key={index}
                    expanded={expanded === `panel${index + 1}`}
                    onChange={handleChange(`panel${index + 1}`)}
                    className={Classes.faqItem}
                >
                    <StyledAccordionSummary
                        expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                        aria-controls={`panel${index + 1}bh-content`}
                        id={`panel${index + 1}bh-header`}
                    >
                        <AccordionHeader>{faq.question}</AccordionHeader>
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                        <AccordionText>{faq.answer}</AccordionText>
                    </StyledAccordionDetails>
                </StyledAccordion>
            ))}
        </AccordionContainer>
    );
};

export default SectionE;
