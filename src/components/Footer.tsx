import { ChildrenProps } from '../interfaces/childrenProps';
import { SectionHeaderProps } from '../interfaces/sectionHeaderProps';
import SectionHeader from './SectionHeader';
import { LinkedIn, Laptop, PhotoCamera, People } from '@material-ui/icons';


const Contact = (props: ChildrenProps) => {
    const sectionHeaderProps: SectionHeaderProps = {
        title: props.title,
        quote: props.quote,
        author: props.author,
    }
    return (
        <div className={props.styleHeader}>
            <SectionHeader {...sectionHeaderProps}/>
            <div className="flex flex-row justify-around text-left p-4 text-black">
                <div>
                    <p className="font-semibold text-xl mb-12">
                        Acknowledgements:
                    </p>
                    <div className='text-signal '>
                        <div className="mb-6">
                            <a href='http://www.pascalvangemert.nl/' target="_blank" rel="noreferrer">
                                <Laptop />
                                Pascal Vangemert
                            </a>
                        </div>
                        <div>
                            <a href='https://www.pexels.com/de-de/@introspectivedsgn/' target="_blank" rel="noreferrer">
                                <PhotoCamera />
                                Erik Mclean
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-xl mb-12">
                        Me:
                    </p>
                    <div className='text-signal '>
                        <div className="mb-6">
                            <a href='https://www.linkedin.com/in/robin-leber-352b921a1/' target="_blank" rel="noreferrer">
                                <LinkedIn />
                                LinkedIn
                            </a>
                        </div>
                        <div>
                            <a href='https://www.xing.com/profile/Robin_Leber4/cv' target="_blank" rel="noreferrer">
                                <People />
                                Xing
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;