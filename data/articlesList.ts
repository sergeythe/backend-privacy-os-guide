import { Article } from "../types/article";
import { OSList } from "./osSlugList";

export const ARTICLES: Article[] = [
  {
    title: "Whonix: Overview & Installation",
    site: "https://www.whonix.org/",
    content: {
      paragraphs: [
        `Whonix is a specialized operating system created by to ensure 
        the anonymity and safety of users on the Internet. It is based 
        on Debian and uses virtualization technology that Allows you to 
        isolate workflows. Whonix consists of two main components: 
        Whonix-Gateway and Whonix-Workstation. The first of them connects 
        to the Tor network, providing anonymous access to the Internet, 
        while The second serves as an isolated environment for working with 
        the Internet. All connections from the Workstation go through 
        the Gateway, which significantly Improves safety.`,
        `Installing Whonix requires a virtual machine, such as VirtualBox or 
        VMware. Before starting the process, you need to download the images 
        for Whonix-Gateway and Whonix-Workstation from the official website. 
        After two virtual machines are created in VirtualBox: one for the Gateway,
         the other for Workstation. It is important to configure network adapters
          correctly, so that the Whonix-Workstation can connect to the Whonix-Gateway,
           which will provide the necessary anonymity.`,
        `After the installation and configuration of virtual machines is completed, 
        the user you need to run Whonix-Gateway and make sure that Tor is working correctly.
         You can then open the Whonix-Workstation and start surfing safely in the Internet.
          Thanks to the isolation and use of the Tor network, Whonix provides a high level
           of protection and anonymity, which makes it An ideal choice for those who value 
           their online safety.`,
      ],
      image: "images/whonix.png",
    },
    slug: OSList.WHONIX,
  },
  {
    title: "Qubes OS",
    site: "https://www.qubes-os.org/",
    content: {
      paragraphs: [
        `Qubes OS is a unique operating system focused on security and isolation. 
        It uses the concept of virtualization to separating different tasks and 
        applications into separate virtual machines, called "qubes". This allows 
        users to isolate potentially unsafe applications from more secure ones, 
        which significantly reduces the risk of system compromise. Qubes OS is 
        based on Fedora and uses Xen Hypervisor to manage virtual machines, which
         ensures a high level of security and flexibility.`,
        `Installing Qubes OS requires prior preparation and compliance with certain
         steps. First, you need to download the Qubes OS image from the official 
         website and create a bootable USB drive or DVD. For you can use programs 
         such as Rufus or Etcher. Importantly make sure your computer supports 
         virtualization and has sufficient resources, since Qubes OS requires a 
         minimum of 4 GB of RAM memory and 32 GB of free disk space.`,
        `After creating the bootable media, connect it to your computer and Reboot 
        the system. Enter the BIOS or boot menu to select booting from a USB drive 
        or DVD. The Qubes OS installer will offer you Go through a few setup steps, 
        including selecting a language and options Installation. Once the installation
         is complete, the system will reboot and you'll will be able to log in to 
         Qubes OS, where you can create and manage various cubes for various tasks.`,
        `Qubes OS provides powerful tools for security management and privacy, 
        allowing users to isolate their workers processes and minimize risks. 
        This operating system is ideal Suitable for those who value security 
        and want to have complete control over your data and apps.`,
      ],
      image: "images/qubes.png",
    },
    slug: OSList.QUBESOS,
  },
  {
    title: "Tails: Overview & Installation",
    site: "https://tails.net/",
    content: {
      paragraphs: [
        `Tails is an operating system designed to provide anonymity and 
        privacy of users on the Internet. It was founded on Debian and 
        can be run from a USB drive or DVD, which allows you to use it 
        on any computer without the need to install it on hard disk. 
        Tails automatically connects to the Tor network, providing 
        Access the internet anonymously and protect your data from surveillance.
         This The system is ideal for those who want to keep their personal 
         safe information, such as journalists, activists and privacy-conscious users.`,
        `Installing Tails is simple enough and only requires a few Steps. 
        First, you need to download the Tails image from the official website.
         After that, you will need a USB drive of at least 8 GB. Use an image 
         writer such as Etcher or Rufus, to burn the downloaded Tails image 
         to a USB drive. Importantly note that all data on the drive will 
         be deleted, so make sure that you've saved important files.`,
        `After writing the image to a USB drive, connect it to your computer
         and Reboot the system. Enter the BIOS or boot menu (usually is done
          using the F2, F12, Esc or Del keys, depending on the model computer)
           and select Boot from a USB drive. Tails will load into the "Live" mode, 
           which means that all changes made to the system are not will persist 
           after a reboot, providing an extra layer of Security.`,
        `When Tails loads, you'll see a welcome screen where you can Configure
         language and network connection settings. After that, you will be able
          to use Tails to surf the internet safely, communicate and work with
           documents without leaving traces on the computer. This system provides 
           powerful tools to protect your privacy and anonymity on the Internet.`,
      ],
      image: "images/tails.png",
    },
    slug: OSList.TAILS,
  },
];
